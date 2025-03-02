import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-elements';

export default function MonetizationDashboard() {
  const revenueStreams = [
    {
      title: 'Premium Restaurant Listings',
      description: 'Featured spots in search results',
      pricing: [
        { level: 'Elite', price: '$499/month' },
        { level: 'Premium', price: '$299/month' },
        { level: 'Standard', price: '$149/month' }
      ]
    },
    {
      title: 'Sponsored Events',
      description: 'Promoted events and special offers',
      pricing: [
        { level: 'Featured Event', price: '$199/event' },
        { level: 'Promoted Deal', price: '$99/week' }
      ]
    },
    {
      title: 'Loyalty Program',
      description: 'Customer rewards and referrals',
      pricing: [
        { level: 'Restaurant Commission', price: '5% per transaction' },
        { level: 'Referral Bonus', price: '$10 per new signup' }
      ]
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {revenueStreams.map((stream, index) => (
        <Card key={index} containerStyle={styles.streamCard}>
          <Card.Title>{stream.title}</Card.Title>
          <Text style={styles.description}>{stream.description}</Text>
          
          {stream.pricing.map((price, idx) => (
            <View key={idx} style={styles.pricingRow}>
              <Text style={styles.level}>{price.level}</Text>
              <Text style={styles.price}>{price.price}</Text>
              <Button
                title="Activate"
                buttonStyle={styles.activateButton}
              />
            </View>
          ))}
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  streamCard: {
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
  },
  description: {
    color: '#666',
    marginBottom: 15,
  },
  pricingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  level: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    color: '#6C63FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activateButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});