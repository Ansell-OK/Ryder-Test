import React from 'react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface FeatureType {
  title: string;
  description: string;
  icon: React.ReactNode;
}