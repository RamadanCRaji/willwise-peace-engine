
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Eye, EyeOff, Smartphone, CreditCard, Cloud } from "lucide-react";

interface DigitalAsset {
  id: string;
  type: 'social' | 'financial' | 'crypto' | 'cloud' | 'other';
  name: string;
  username: string;
  instructions: string;
  priority: 'high' | 'medium' | 'low';
}

interface DigitalAssetManagerProps {
  assets: DigitalAsset[];
  onAssetsChange: (assets: DigitalAsset[]) => void;
}

const DigitalAssetManager = ({ assets, onAssetsChange }: DigitalAssetManagerProps) => {
  const [showForm, setShowForm] = useState(false);
  const [newAsset, setNewAsset] = useState<Partial<DigitalAsset>>({
    type: 'social',
    priority: 'medium',
    name: '',
    username: '',
    instructions: ''
  });

  const assetTypes = [
    { value: 'social', label: 'Social Media', icon: Smartphone },
    { value: 'financial', label: 'Financial', icon: CreditCard },
    { value: 'crypto', label: 'Cryptocurrency', icon: CreditCard },
    { value: 'cloud', label: 'Cloud Storage', icon: Cloud },
    { value: 'other', label: 'Other', icon: Smartphone }
  ];

  const addAsset = () => {
    if (newAsset.name && newAsset.username) {
      const asset: DigitalAsset = {
        id: Date.now().toString(),
        type: newAsset.type as DigitalAsset['type'],
        name: newAsset.name,
        username: newAsset.username,
        instructions: newAsset.instructions || '',
        priority: newAsset.priority as DigitalAsset['priority']
      };
      
      onAssetsChange([...assets, asset]);
      setNewAsset({
        type: 'social',
        priority: 'medium',
        name: '',
        username: '',
        instructions: ''
      });
      setShowForm(false);
    }
  };

  const removeAsset = (id: string) => {
    onAssetsChange(assets.filter(asset => asset.id !== id));
  };

  const getAssetIcon = (type: string) => {
    const assetType = assetTypes.find(t => t.value === type);
    return assetType ? assetType.icon : Smartphone;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Digital Assets ({assets.length})
            <Button 
              onClick={() => setShowForm(!showForm)}
              size="sm"
              className="bg-slate-900 hover:bg-slate-800 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Digital Asset
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {showForm && (
            <Card className="mb-6 border-blue-200 bg-blue-50">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="assetType">Asset Type</Label>
                    <select
                      id="assetType"
                      value={newAsset.type}
                      onChange={(e) => setNewAsset(prev => ({ ...prev, type: e.target.value as DigitalAsset['type'] }))}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    >
                      {assetTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="assetName">Platform/Service Name</Label>
                    <Input
                      id="assetName"
                      value={newAsset.name}
                      onChange={(e) => setNewAsset(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g., Gmail, Twitter, Coinbase"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="username">Username/Email</Label>
                    <Input
                      id="username"
                      value={newAsset.username}
                      onChange={(e) => setNewAsset(prev => ({ ...prev, username: e.target.value }))}
                      placeholder="Username or email address"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="priority">Priority</Label>
                    <select
                      id="priority"
                      value={newAsset.priority}
                      onChange={(e) => setNewAsset(prev => ({ ...prev, priority: e.target.value as DigitalAsset['priority'] }))}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    >
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="instructions">Special Instructions</Label>
                  <Textarea
                    id="instructions"
                    value={newAsset.instructions}
                    onChange={(e) => setNewAsset(prev => ({ ...prev, instructions: e.target.value }))}
                    placeholder="e.g., Transfer to spouse, delete account, preserve for children..."
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-2 mt-4">
                  <Button onClick={addAsset} size="sm">Add Asset</Button>
                  <Button onClick={() => setShowForm(false)} variant="outline" size="sm">Cancel</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {assets.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Cloud className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>No digital assets added yet</p>
              <p className="text-sm">Add your online accounts, crypto wallets, and digital properties</p>
            </div>
          ) : (
            <div className="space-y-3">
              {assets.map((asset) => {
                const IconComponent = getAssetIcon(asset.type);
                return (
                  <div key={asset.id} className="flex items-center justify-between p-3 bg-white border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 text-gray-600" />
                      <div>
                        <p className="font-medium">{asset.name}</p>
                        <p className="text-sm text-gray-600">{asset.username}</p>
                        {asset.instructions && (
                          <p className="text-sm text-gray-500 mt-1">{asset.instructions}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={asset.priority === 'high' ? 'destructive' : asset.priority === 'medium' ? 'default' : 'secondary'}>
                        {asset.priority}
                      </Badge>
                      <Button onClick={() => removeAsset(asset.id)} variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DigitalAssetManager;
