'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import AppWrapper from '../../components/AppWrapper';
import './styles.css';

export default function AddYourCompany() {
    return (
        <AppWrapper>
            <Helmet>
                <title>Add Your Company to Supplier Database | Memate</title>
                <meta name="description" content="Join Memate's supplier database and connect with businesses looking for your services. Expand your reach and grow your business." />
            </Helmet>
            
            <div className="add-company-page">
                <div className="container">
                    <div className="hero-section">
                        <h1>Add Your Company to Our Supplier Database</h1>
                        <p className="lead">Connect with businesses actively seeking your services and expand your customer base.</p>
                    </div>
                    
                    <div className="form-section">
                        <h2>Get Listed Today</h2>
                        <p>Complete the form below to add your company to our comprehensive supplier database.</p>
                        
                        <form className="supplier-form">
                            <div className="form-group">
                                <label htmlFor="company-name">Company Name *</label>
                                <input type="text" id="company-name" name="companyName" required />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="business-type">Business Type *</label>
                                <select id="business-type" name="businessType" required>
                                    <option value="">Select your business type</option>
                                    <option value="construction">Construction</option>
                                    <option value="automotive">Automotive</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="creative">Creative Services</option>
                                    <option value="consulting">Consulting</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="contact-email">Contact Email *</label>
                                <input type="email" id="contact-email" name="contactEmail" required />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="website">Website</label>
                                <input type="url" id="website" name="website" />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="description">Company Description</label>
                                <textarea id="description" name="description" rows="4"></textarea>
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit Application</button>
                        </form>
                    </div>
                    
                    <div className="benefits-section">
                        <h2>Benefits of Joining</h2>
                        <ul>
                            <li>Increased visibility to potential customers</li>
                            <li>Direct connection with businesses seeking your services</li>
                            <li>Free listing in our comprehensive database</li>
                            <li>Enhanced business networking opportunities</li>
                        </ul>
                    </div>
                </div>
            </div>
        </AppWrapper>
    );
}