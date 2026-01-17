import React from 'react';
import { Check, Trash2, Calendar, Tag } from 'lucide-react';
import { Task } from '../types';
import { format } from 'date-fns';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const priorityColors = {
  low: 'bg-blue-100 text-blue-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-center justify-between group hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <button
          onClick={() => onToggle(task.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
            task.completed
              ? 'bg-green-500 border-green-500'
              : 'border-gray-300 hover:border-green-500'
          }`}
        >
          {task.completed && <Check className="w-4 h-4 text-white animate-check" />}
        </button>
        
        <div className="flex flex-col">
          <span className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
            {task.title}
          </span>
          <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
            {task.dueDate && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{format(task.dueDate, 'MMM d')}</span>
              </div>
            )}
            {task.category && (
              <div className="flex items-center gap-1">
                <Tag className="w-3 h-3" />
                <span>{task.category}</span>
              </div>
            )}
            <span className={`text-xs px-2 py-0.5 rounded-full ${priorityColors[task.priority]}`}>
              {task.priority}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-2"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}