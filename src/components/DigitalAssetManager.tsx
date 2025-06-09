
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Eye, EyeOff, Shield } from "lucide-react";

interface DigitalAsset {
  id: string;
  name: string;
  type: string;
  url: string;
  username: string;
  password: string;
  instructions: string;
  importance: 'high' | 'medium' | 'low';
}

interface DigitalAssetManagerProps {
  assets: DigitalAsset[];
  onAssetsChange: (assets: DigitalAsset[]) => void;
}

const DigitalAssetManager = ({ assets, onAssetsChange }: DigitalAssetManagerProps) => {
  const [showPasswords, setShowPasswords] = useState<{ [key: string]: boolean }>({});
  const [newAsset, setNewAsset] = useState<Partial<DigitalAsset>>({
    name: '',
    type: '',
    url: '',
    username: '',
    password: '',
    instructions: '',
    importance: 'medium'
  });

  const addAsset = () => {
    if (!newAsset.name || !newAsset.type) return;
    
    const asset: DigitalAsset = {
      id: Date.now().toString(),
      name: newAsset.name,
      type: newAsset.type,
      url: newAsset.url || '',
      username: newAsset.username || '',
      password: newAsset.password || '',
      instructions: newAsset.instructions || '',
      importance: newAsset.importance || 'medium'
    };
    
    onAssetsChange([...assets, asset]);
    setNewAsset({
      name: '',
      type: '',
      url: '',
      username: '',
      password: '',
      instructions: '',
      importance: 'medium'
    });
  };

  const removeAsset = (id: string) => {
    onAssetsChange(assets.filter(asset => asset.id !== id));
  };

  const togglePasswordVisibility = (id: string) => {
    setShowPasswords(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const assetTypes = [
    'Social Media', 'Email Account', 'Cloud Storage', 'Cryptocurrency Wallet',
    'Investment Account', 'Domain/Website', 'Subscription Service', 'Photo Library'
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Digital Asset Manager
          </CardTitle>
          <p className="text-sm text-gray-600">
            Securely store access information for your digital accounts and assets
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="assetName">Asset Name</Label>
              <Input
                id="assetName"
                value={newAsset.name}
                onChange={(e) => setNewAsset(prev => ({ ...prev, name: e.target.value }))}
                placeholder="e.g., Gmail Account, Coinbase Wallet"
              />
            </div>
            <div>
              <Label htmlFor="assetType">Asset Type</Label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={newAsset.type}
                onChange={(e) => setNewAsset(prev => ({ ...prev, type: e.target.value }))}
              >
                <option value="">Select type...</option>
                {assetTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="assetUrl">URL/Website</Label>
              <Input
                id="assetUrl"
                value={newAsset.url}
                onChange={(e) => setNewAsset(prev => ({ ...prev, url: e.target.value }))}
                placeholder="https://..."
              />
            </div>
            <div>
              <Label htmlFor="assetUsername">Username/Email</Label>
              <Input
                id="assetUsername"
                value={newAsset.username}
                onChange={(e) => setNewAsset(prev => ({ ...prev, username: e.target.value }))}
                placeholder="Username or email"
              />
            </div>
            <div>
              <Label htmlFor="assetPassword">Password/Recovery Info</Label>
              <Input
                id="assetPassword"
                type="password"
                value={newAsset.password}
                onChange={(e) => setNewAsset(prev => ({ ...prev, password: e.target.value }))}
                placeholder="Password, seed phrase, or recovery info"
              />
            </div>
            <div>
              <Label htmlFor="importance">Importance Level</Label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={newAsset.importance}
                onChange={(e) => setNewAsset(prev => ({ ...prev, importance: e.target.value as 'high' | 'medium' | 'low' }))}
              >
                <option value="high">High Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="low">Low Priority</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <Label htmlFor="assetInstructions">Special Instructions</Label>
            <Textarea
              id="assetInstructions"
              value={newAsset.instructions}
              onChange={(e) => setNewAsset(prev => ({ ...prev, instructions: e.target.value }))}
              placeholder="e.g., Transfer to spouse, delete account, preserve for children..."
              className="h-20"
            />
          </div>
          <Button onClick={addAsset} className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Add Digital Asset
          </Button>
        </CardContent>
      </Card>

      {assets.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Your Digital Assets ({assets.length})</h3>
          {assets.map(asset => (
            <Card key={asset.id} className="border-l-4 border-l-blue-500">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">{asset.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {asset.type}
                    </Badge>
                    <Badge 
                      variant={asset.importance === 'high' ? 'destructive' : asset.importance === 'medium' ? 'default' : 'secondary'}
                      className="ml-2 text-xs"
                    >
                      {asset.importance} priority
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeAsset(asset.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  {asset.url && <p><strong>URL:</strong> {asset.url}</p>}
                  {asset.username && <p><strong>Username:</strong> {asset.username}</p>}
                  {asset.password && (
                    <p className="flex items-center gap-2">
                      <strong>Password:</strong> 
                      {showPasswords[asset.id] ? asset.password : '••••••••'}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => togglePasswordVisibility(asset.id)}
                      >
                        {showPasswords[asset.id] ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      </Button>
                    </p>
                  )}
                </div>
                
                {asset.instructions && (
                  <div className="mt-2 p-2 bg-gray-50 rounded text-sm">
                    <strong>Instructions:</strong> {asset.instructions}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default DigitalAssetManager;
