import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 50,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 50,
  },
});

const MyDocument = ({ name, image }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.title}>Generated PDF</Text>
        <Text>Name: {name}</Text>
        {image && <Image src={image} style={styles.image} />}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
