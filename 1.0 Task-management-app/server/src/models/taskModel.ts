import { Schema, model, Document } from 'mongoose';

// Define interface for TypeScript to ensure type safety
interface ITask extends Document {
  title: string;
  description: string;
  completed: boolean;
  team: {
    name: string;
    avatarUrl: string; // URL or path to avatar image
  };
  category: 'recently' | 'today' | 'upcoming' | 'later'; // Task category field
}

// Create Mongoose schema for Task
const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  team: {
    name: { type: String, required: true },
    avatarUrl: { type: String, required: true } // Store URL or path to avatar image
  },
  category: {
    type: String,
    enum: ['recently', 'today', 'upcoming', 'later'],
    default: 'today'
  }
}, { timestamps: true });

// Create Mongoose model based on the schema
export const Task = model<ITask>('Task', taskSchema);
