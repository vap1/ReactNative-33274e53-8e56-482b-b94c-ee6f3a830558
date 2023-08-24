
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Task } from '../models/Task';
import { getTasks } from '../api/TaskApi';

const TaskAssignmentScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const tasksResponse = await getTasks();
      setTasks(tasksResponse);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const renderTaskItem = ({ item }: { item: Task }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      {/* Render other task details */}
    </View>
  );

  return (
    <View>
      <Text>Task Assignment Screen</Text>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TaskAssignmentScreen;