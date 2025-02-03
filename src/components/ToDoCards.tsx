import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Fonts} from '../styles/font';
import {Colors} from '../styles/color';
import {CheckboxProps, ProgressBarProps} from '../utils/types';

const WINDOW_WIDTH = Dimensions.get('window').width;

// Define the structure of a Todo item
interface Todo {
  id: number;
  title: string;
  date: string;
  author: string;
  completed: boolean;
}

const TodoCards: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: 'Achieve 30k steps every week for blood sugar',
      date: 'Sep 5, 2024',
      author: 'Laurie Simons',
      completed: false,
    },
    {
      id: 2,
      title: 'Take up health Coaching',
      date: 'Sep 5, 2024',
      author: 'Laurie Simons',
      completed: false,
    },
    {
      id: 3,
      title: 'Go to a nearby gym and workout for 30 mins',
      date: 'Sep 5, 2024',
      author: 'Laurie Simons',
      completed: false,
    },
    {
      id: 4,
      title: 'Complete 2 courses of Dr. Laurie Simons',
      date: 'Aug 30, 2024',
      author: 'Laurie Simons',
      completed: true,
    },
  ]);

  const calculateProgress = (): {fraction: string; percentage: number} => {
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    return {
      fraction: `${completedTodos}/${totalTodos}`,
      percentage: (completedTodos / totalTodos) * 100,
    };
  };

  const toggleTodo = (id: number): void => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    );
  };

  const ProgressBar: React.FC<ProgressBarProps> = ({progress}) => (
    <View style={styles.progressContainer}>
      <Text style={styles.progressText}>{progress.fraction} Completed</Text>
      <View style={styles.progressBarContainer}>
        <View
          style={[styles.progressBar, {width: `${progress.percentage}%`}]}
        />
      </View>
    </View>
  );

  const Checkbox: React.FC<CheckboxProps> = ({checked, onPress}) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.checkbox, checked && styles.checkedBox]}>
      {checked && <Text style={styles.checkmark}>✓</Text>}
    </TouchableOpacity>
  );

  const progress = calculateProgress();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Let's check off your to-dos</Text>
      </View>
      <ProgressBar progress={progress} />

      {todos.map(todo => (
        <View key={todo.id} style={styles.card}>
          <Checkbox
            checked={todo.completed}
            onPress={() => toggleTodo(todo.id)}
          />
          <TouchableOpacity
            style={styles.cardContent}
            onPress={() => toggleTodo(todo.id)}>
            <Text
              style={[styles.title, todo.completed && styles.completedTitle]}>
              {todo.title}
            </Text>
            <View style={styles.authorContainer}>
              <Text style={styles.author}>{todo.author}</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.date}>{todo.date}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default TodoCards;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.white,
    paddingBottom: 80,
  },
  header: {
    borderTopWidth: 1,
    borderColor: Colors.lightGray,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: Fonts.iMedium,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    fontWeight: '400',
    fontFamily: Fonts.iSemiBold,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: Colors.lightGreen,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: Colors.green,
    borderRadius: 4,
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    alignItems: 'flex-start',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.gray,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: Colors.darkGreen,
    borderColor: Colors.darkGreen,
  },
  checkmark: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    fontFamily: Fonts.iSemiBold,
    color: Colors.black,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  author: {
    fontSize: 14,
    color: Colors.gray,
  },
  dot: {
    fontSize: 14,
    color: Colors.gray,
    marginHorizontal: 6,
  },
  date: {
    fontSize: 14,
    color: Colors.gray,
  },
  completedTitle: {
    color: Colors.gray,
  },
});
