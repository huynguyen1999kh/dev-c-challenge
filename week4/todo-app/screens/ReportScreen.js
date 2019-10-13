import React from "react";
import { ScrollView, StyleSheet, View, Picker, Text } from "react-native";
import PieChart from 'react-native-pie-chart';
import { todos } from '../data/todos'
import TabApp from '../navigation/ReportTabNavigator';

export default class ReportsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: todos,
    }
  }
  render() {
    const chart_wh = 220
    const series = [
      this.state.todos.filter(item => item.isDone==true).length,
      this.state.todos.filter(item => item.isDone==false).length,
    ]
    const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.today}>Today</Text>
            <Text style={styles.dateTime}>{(new Date()).toDateString()}</Text>
          </View>
          <Picker
            style={{ height: 50, width: 110 }}>
            <Picker.Item label="Tasks" value="tasks" />
            <Picker.Item label="Todos" value="todos" />
          </Picker>
        </View>
        <View style={styles.chartContainer}>
          <Text style={styles.undone}>UnDone</Text>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
          <Text style={styles.done}>Done</Text>
        </View>
        <TabApp todos={this.state.todos}/>
      </View>
    )
  }
}

ReportsScreen.navigationOptions = {
  title: "Reports"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#F8F8F8',
  },
  header: {
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  today: {
    fontSize: 20,
    fontWeight: '700',
  },
  dateTime: {
    fontSize: 18,
    fontWeight: '700',
  },
  done: {
    alignSelf: 'flex-end',
    marginLeft: -30,
    fontWeight: '600',
  },
  undone: {
    alignSelf: 'flex-end',
    marginRight: -30,
    marginBottom: 5,
    fontWeight: '600',
  },
  tab: {
    
  }
});
