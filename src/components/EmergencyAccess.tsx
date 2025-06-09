
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Phone, Mail, Users } from "lucide-react";

interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  email: string;
  phone: string;
  priority: number;
  accessLevel: 'full' | 'limited' | 'notification-only';
  instructions: string;
}

interface EmergencyAccessProps {
  contacts: EmergencyContact[];
  onContactsChange: (contacts: EmergencyContact[]) => void;
  emergencyInstructions: string;
  onInstructionsChange: (instructions: string) => void;
}

const EmergencyAccess = ({ 
  contacts, 
  onContactsChange, 
  emergencyInstructions, 
  onInstructionsChange 
}: EmergencyAccessProps) => {
  const [showForm, setShowForm] = useState(false);
  const [newContact, setNewContact] = useState<Partial<EmergencyContact>>({
    name: '',
    relationship: '',
    email: '',
    phone: '',
    priority: 1,
    accessLevel: 'limited',
    instructions: ''
  });

  const accessLevels = [
    { value: 'full', label: 'Full Access', description: 'Can access all digital assets and accounts' },
    { value: 'limited', label: 'Limited Access', description: 'Can access specific accounts only' },
    { value: 'notification-only', label: 'Notification Only', description: 'Will be notified but no access granted' }
  ];

  const addContact = () => {
    if (newContact.name && newContact.email) {
      const contact: EmergencyContact = {
        id: Date.now().toString(),
        name: newContact.name,
        relationship: newContact.relationship || '',
        email: newContact.email,
        phone: newContact.phone || '',
        priority: newContact.priority || contacts.length + 1,
        accessLevel: newContact.accessLevel as EmergencyContact['accessLevel'],
        instructions: newContact.instructions || ''
      };
      
      onContactsChange([...contacts, contact]);
      setNewContact({
        name: '',
        relationship: '',
        email: '',
        phone: '',
        priority: contacts.length + 2,
        accessLevel: 'limited',
        instructions: ''
      });
      setShowForm(false);
    }
  };

  const removeContact = (id: string) => {
    onContactsChange(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Emergency Contacts ({contacts.length})
            <Button 
              onClick={() => setShowForm(!showForm)}
              size="sm"
              className="bg-slate-900 hover:bg-slate-800 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Emergency Contact
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {showForm && (
            <Card className="mb-6 border-blue-200 bg-blue-50">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactName">Full Name</Label>
                    <Input
                      id="contactName"
                      value={newContact.name}
                      onChange={(e) => setNewContact(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Emergency contact's full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="relationship">Relationship</Label>
                    <Input
                      id="relationship"
                      value={newContact.relationship}
                      onChange={(e) => setNewContact(prev => ({ ...prev, relationship: e.target.value }))}
                      placeholder="e.g., Spouse, Child, Sibling"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newContact.email}
                      onChange={(e) => setNewContact(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="contact@example.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={newContact.phone}
                      onChange={(e) => setNewContact(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="(555) 123-4567"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="priority">Priority Level</Label>
                    <select
                      id="priority"
                      value={newContact.priority}
                      onChange={(e) => setNewContact(prev => ({ ...prev, priority: parseInt(e.target.value) }))}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>Priority {num}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="accessLevel">Access Level</Label>
                    <select
                      id="accessLevel"
                      value={newContact.accessLevel}
                      onChange={(e) => setNewContact(prev => ({ ...prev, accessLevel: e.target.value as EmergencyContact['accessLevel'] }))}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    >
                      {accessLevels.map(level => (
                        <option key={level.value} value={level.value}>{level.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="contactInstructions">Special Instructions</Label>
                  <Textarea
                    id="contactInstructions"
                    value={newContact.instructions}
                    onChange={(e) => setNewContact(prev => ({ ...prev, instructions: e.target.value }))}
                    placeholder="Any special instructions for this contact..."
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-2 mt-4">
                  <Button onClick={addContact} size="sm">Add Contact</Button>
                  <Button onClick={() => setShowForm(false)} variant="outline" size="sm">Cancel</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {contacts.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>No emergency contacts added yet</p>
              <p className="text-sm">Add trusted contacts who should be notified in case of emergency</p>
            </div>
          ) : (
            <div className="space-y-3">
              {contacts
                .sort((a, b) => a.priority - b.priority)
                .map((contact) => (
                  <div key={contact.id} className="flex items-center justify-between p-3 bg-white border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-medium text-sm">{contact.priority}</span>
                      </div>
                      <div>
                        <p className="font-medium">{contact.name}</p>
                        <p className="text-sm text-gray-600">{contact.relationship}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          {contact.email && (
                            <div className="flex items-center space-x-1">
                              <Mail className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-500">{contact.email}</span>
                            </div>
                          )}
                          {contact.phone && (
                            <div className="flex items-center space-x-1">
                              <Phone className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-500">{contact.phone}</span>
                            </div>
                          )}
                        </div>
                        {contact.instructions && (
                          <p className="text-sm text-gray-500 mt-1">{contact.instructions}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={
                          contact.accessLevel === 'full' ? 'destructive' : 
                          contact.accessLevel === 'limited' ? 'default' : 'secondary'
                        }
                      >
                        {contact.accessLevel}
                      </Badge>
                      <Button onClick={() => removeContact(contact.id)} variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Emergency Instructions</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="emergencyInstructions">
            Instructions for Emergency Contacts
          </Label>
          <Textarea
            id="emergencyInstructions"
            value={emergencyInstructions}
            onChange={(e) => onInstructionsChange(e.target.value)}
            placeholder="Provide detailed instructions for your emergency contacts on how to access your digital assets, what to do first, who to contact, etc."
            className="mt-2 h-32"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EmergencyAccess;
