import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'li': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'background': 'black',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'borderRadius': '3px',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'color': 'white',
    'width': [{ 'unit': '%H', 'value': 0.94 }],
    'marginLeft': [{ 'unit': '%H', 'value': 0.03 }],
    'marginRight': [{ 'unit': '%H', 'value': 0.03 }]
  },
  'date': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'background': 'grey',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'borderRadius': '5px',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'fontColor': 'white',
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'marginLeft': [{ 'unit': '%H', 'value': 0.1 }],
    'marginRight': [{ 'unit': '%H', 'value': 0.1 }]
  },
  'ling-enter': {
    'transition': '.2s linear all',
    'opacity': '0',
    'transform': 'translateX(30px)'
  },
  'ling-enterng-enter-active': {
    'opacity': '1',
    'transform': 'translateX(0px)'
  },
  'ling-leave': {
    'transition': '.2s linear all',
    'opacity': '1',
    'transform': 'translateX(0px)'
  },
  'ling-leaveng-leave-active': {
    'opacity': '0',
    'transform': 'translateX(30px)'
  }
});
