import { useState } from 'react';
import './AdminPanel.css';

interface Photo {
  id: number;
  src: string;
  alt: string;
  date: string;
}

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  image?: string;
}

const AdminPanel = () => {
  const [showPhotoForm, setShowPhotoForm] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [newPhoto, setNewPhoto] = useState<Partial<Photo>>({});
  const [newEvent, setNewEvent] = useState<Partial<TimelineEvent>>({});
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handlePhotoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('photo', selectedFile);
    formData.append('data', JSON.stringify(newPhoto));

    try {
      // Here you would typically make an API call to save the photo
      console.log('Submitting photo:', formData);
      setShowPhotoForm(false);
      setNewPhoto({});
      setSelectedFile(null);
    } catch (error) {
      console.error('Error saving photo:', error);
    }
  };

  const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('data', JSON.stringify(newEvent));

    try {
      // Here you would typically make an API call to save the event
      console.log('Submitting event:', formData);
      setShowEventForm(false);
      setNewEvent({});
      setSelectedFile(null);
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  return (
    <div className="admin-panel">
      <h2 className="admin-title">Admin Panel</h2>
      
      <div className="admin-section">
        <h3>Gallery Management</h3>
        <button 
          className="admin-button"
          onClick={() => setShowPhotoForm(!showPhotoForm)}
        >
          {showPhotoForm ? 'Cancel' : 'Add New Photo'}
        </button>

        {showPhotoForm && (
          <form className="admin-form" onSubmit={handlePhotoSubmit}>
            <div className="form-group">
              <label>Photo Title:</label>
              <input
                type="text"
                value={newPhoto.alt || ''}
                onChange={(e) => setNewPhoto({ ...newPhoto, alt: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Date/Caption:</label>
              <input
                type="text"
                value={newPhoto.date || ''}
                onChange={(e) => setNewPhoto({ ...newPhoto, date: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Photo:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                required
              />
            </div>
            <button type="submit" className="submit-button">Add Photo</button>
          </form>
        )}
      </div>

      <div className="admin-section">
        <h3>Journey Management</h3>
        <button 
          className="admin-button"
          onClick={() => setShowEventForm(!showEventForm)}
        >
          {showEventForm ? 'Cancel' : 'Add New Event'}
        </button>

        {showEventForm && (
          <form className="admin-form" onSubmit={handleEventSubmit}>
            <div className="form-group">
              <label>Event Title:</label>
              <input
                type="text"
                value={newEvent.title || ''}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Date:</label>
              <input
                type="text"
                value={newEvent.date || ''}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                value={newEvent.description || ''}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Event Photo:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                required
              />
            </div>
            <button type="submit" className="submit-button">Add Event</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminPanel; 