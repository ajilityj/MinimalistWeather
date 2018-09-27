import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1
  },
  loadingContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  loadedContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 24
  },
  loadingText: {
    fontSize: 25,
    marginBottom: 25
  },
  timeText: {
    color: '#aaa',
    fontSize: 16,
    textAlign: 'center'
  },
  errorMessage: {
    color: '#ff4136',
    fontSize: 25
  }
});
