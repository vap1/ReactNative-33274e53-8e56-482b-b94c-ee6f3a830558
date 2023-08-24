
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { APIService } from '../services/APIService';

const HomeScreen: React.FC = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await APIService.getLeads();
      setLeads(response.data);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leads</Text>
      {leads.map((lead: any) => (
        <Text key={lead.id} style={styles.leadItem}>
          {lead.name}
        </Text>
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
    fontSize: 16,
    marginBottom: 8,
  },
});

export default HomeScreen;