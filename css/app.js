import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'li': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'background': 'none',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'red' }],
    'borderStyle': 'solid',
    'borderColor': '#03A9F4',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'borderRadius': '5px',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'color': '#2e2e2e',
    'width': [{ 'unit': '%H', 'value': 0.94 }],
    'marginLeft': [{ 'unit': '%H', 'value': 0.03 }],
    'marginRight': [{ 'unit': '%H', 'value': 0.03 }]
  },
  'date': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'background': '#212121',
    // For browsers that do not support gradients
    'height': [{ 'unit': 'px', 'value': 40 }],
    'borderRadius': '0px',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'color': 'white',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': '%H', 'value': 0 }],
    'marginRight': [{ 'unit': '%H', 'value': 0 }],
    'paddingLeft': [{ 'unit': '%H', 'value': 0.42 }]
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
