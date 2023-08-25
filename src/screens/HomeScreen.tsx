
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Lead } from '../types/LeadTypes';
import { getLeads } from '../apis/LeadApi';

const HomeScreen: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await getLeads();
      setLeads(response.leads);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leads</Text>
      {leads.map((lead: Lead) => (
        <View key={lead.leadId} style={styles.leadItem}>
          <Text>{lead.contactDetails}</Text>
          <Text>{lead.relevantInfo}</Text>
          {/* Render other lead details */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  leadItem: {
    marginBottom: 8,
  },
});

export default HomeScreen;