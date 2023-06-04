import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { jsPDF } from 'jspdf';

const PdfGenerator = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text('Generated PDF', 20, 20);

    doc.setFontSize(14);
    doc.text(`Name: ${name}`, 20, 40);

    if (image) {
      const imgWidth = 100;
      const imgHeight = 100;
      doc.addImage(image, 'JPEG', 20, 50, imgWidth, imgHeight);
    }

    doc.save('generated.pdf');
  };

  return (
    <div className="container">
      <h1>PDF Generator</h1>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </FormGroup>
      </Form>
      <Button onClick={generatePDF}>Download PDF</Button>
    </div>
  );
};

export default PdfGenerator;
