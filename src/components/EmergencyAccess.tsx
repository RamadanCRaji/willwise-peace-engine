
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Phone, Mail, AlertTriangle } from "lucide-react";

interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  email: string;
  priority: number;
  accessLevel: 'full' | 'limited' | 'notification-only';
  notes: string;
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
  const [newContact, setNewContact] = useState<Partial<EmergencyContact>>({
    name: '',
    relationship: '',
    phone: '',
    email: '',
    priority: 1,
    accessLevel: 'limited',
    notes: ''
  });

  const addContact = () => {
    if (!newContact.name || !newContact.email) return;
    
    const contact: EmergencyContact = {
      id: Date.now().toString(),
      name: newContact.name,
      relationship: newContact.relationship || '',
      phone: newContact.phone || '',
      email: newContact.email,
      priority: newContact.priority || contacts.length + 1,
      accessLevel: newContact.accessLevel || 'limited',
      notes: newContact.notes || ''
    };
    
    onContactsChange([...contacts, contact].sort((a, b) => a.priority - b.priority));
    setNewContact({
      name: '',
      relationship: '',
      phone: '',
      email: '',
      priority: contacts.length + 2,
      accessLevel: 'limited',
      notes: ''
    });
  };

  const removeContact = (id: string) => {
    onContactsChange(contacts.filter(contact => contact.id !== id));
  };

  const relationships = [
    'Spouse/Partner', 'Parent', 'Child', 'Sibling', 'Friend', 
    'Attorney', 'Accountant', 'Executor', 'Other'
  ];

  return (
    <div className="space-y-6">
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-5 h-5 text-orange-600" />
          <h3 className="font-semibold text-orange-800">Emergency Access Protocol</h3>
        </div>
        <p className="text-sm text-orange-700">
          These contacts will be notified if your accounts show inactivity for an extended period, 
          or if manual emergency protocols are triggered.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add Emergency Contact</CardTitle>
          <p className="text-sm text-gray-600">
            People who should be contacted in case of emergency or extended inactivity
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label htmlFor="contactName">Full Name</Label>
              <Input
                id="contactName"
                value={newContact.name}
                onChange={(e) => setNewContact(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Contact's full name"
              />
            </div>
            <div>
              <Label htmlFor="relationship">Relationship</Label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={newContact.relationship}
                onChange={(e) => setNewContact(prev => ({ ...prev, relationship: e.target.value }))}
              >
                <option value="">Select relationship...</option>
                {relationships.map(rel => (
                  <option key={rel} value={rel}>{rel}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="contactPhone">Phone Number</Label>
              <Input
                id="contactPhone"
                value={newContact.phone}
                onChange={(e) => setNewContact(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <Label htmlFor="contactEmail">Email Address</Label>
              <Input
                id="contactEmail"
                type="email"
                value={newContact.email}
                onChange={(e) => setNewContact(prev => ({ ...prev, email: e.target.value }))}
                placeholder="contact@email.com"
              />
            </div>
            <div>
              <Label htmlFor="priority">Priority Level</Label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={newContact.priority}
                onChange={(e) => setNewContact(prev => ({ ...prev, priority: parseInt(e.target.value) }))}
              >
                <option value={1}>1 - Primary Contact</option>
                <option value={2}>2 - Secondary Contact</option>
                <option value={3}>3 - Tertiary Contact</option>
              </select>
            </div>
            <div>
              <Label htmlFor="accessLevel">Access Level</Label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value={newContact.accessLevel}
                onChange={(e) => setNewContact(prev => ({ ...prev, accessLevel: e.target.value as 'full' | 'limited' | 'notification-only' }))}
              >
                <option value="notification-only">Notification Only</option>
                <option value="limited">Limited Access</option>
                <option value="full">Full Access</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <Label htmlFor="contactNotes">Special Notes</Label>
            <Textarea
              id="contactNotes"
              value={newContact.notes}
              onChange={(e) => setNewContact(prev => ({ ...prev, notes: e.target.value }))}
              placeholder="Any special instructions for this contact..."
              className="h-20"
            />
          </div>
          <Button onClick={addContact} className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Add Emergency Contact
          </Button>
        </CardContent>
      </Card>

      {contacts.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Emergency Contacts ({contacts.length})</h3>
          {contacts.map(contact => (
            <Card key={contact.id} className="border-l-4 border-l-red-500">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">{contact.name}</h4>
                    <Badge variant="outline" className="text-xs mr-2">
                      Priority {contact.priority}
                    </Badge>
                    <Badge variant="secondary" className="text-xs mr-2">
                      {contact.relationship}
                    </Badge>
                    <Badge 
                      variant={contact.accessLevel === 'full' ? 'destructive' : contact.accessLevel === 'limited' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {contact.accessLevel}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeContact(contact.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-2 text-sm mb-2">
                  {contact.phone && (
                    <p className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      {contact.phone}
                    </p>
                  )}
                  <p className="flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    {contact.email}
                  </p>
                </div>
                
                {contact.notes && (
                  <div className="mt-2 p-2 bg-gray-50 rounded text-sm">
                    <strong>Notes:</strong> {contact.notes}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Emergency Instructions</CardTitle>
          <p className="text-sm text-gray-600">
            Detailed instructions for your emergency contacts
          </p>
        </CardHeader>
        <CardContent>
          <Textarea
            value={emergencyInstructions}
            onChange={(e) => onInstructionsChange(e.target.value)}
            placeholder="Detailed instructions for emergency contacts: who to contact first, where important documents are stored, immediate actions to take, account priorities, etc."
            className="h-32"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EmergencyAccess;
