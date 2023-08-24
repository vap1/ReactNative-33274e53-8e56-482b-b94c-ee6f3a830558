
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

interface OpportunityFormProps {
  onSubmit: (opportunity: OpportunityDetails) => void;
}

interface OpportunityDetails {
  // Define the fields for opportunity details here
}

const OpportunityForm: React.FC<OpportunityFormProps> = ({ onSubmit }) => {
  const [opportunity, setOpportunity] = useState<OpportunityDetails>({
    // Initialize the opportunity details state here
  });

  const handleInputChange = (field: keyof OpportunityDetails, value: string) => {
    setOpportunity((prevOpportunity) => ({
      ...prevOpportunity,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(opportunity);
  };

  return (
    <View>
      {/* Render the input fields for opportunity details */}
      <TextInput
        value={opportunity.field1}
        onChangeText={(value) => handleInputChange('field1', value)}
        placeholder="Field 1"
      />
      <TextInput
        value={opportunity.field2}
        onChangeText={(value) => handleInputChange('field2', value)}
        placeholder="Field 2"
      />
      {/* Add more input fields for other opportunity details */}
      
      {/* Render the submit button */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default OpportunityForm;