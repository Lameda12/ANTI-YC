export interface FeedItem {
  id: string;
  timestamp: string;
  location: string;
  status: 'REVIEWING' | 'ACCEPTED' | 'REJECTED' | 'ANALYZING' | 'DEPLOYING';
  project: string;
  agentId: string;
}

export interface ManifestoPoint {
  oldWay: string;
  newWay: string;
  icon: React.ElementType;
}