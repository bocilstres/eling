import React from 'react'; 
import { StyleSheet } from 'react-native'; 
import { DataTable } from 'react-native-paper'; 
import Colors from '../Shared/Colors';

const Table = () => { 
return ( 
	<DataTable style={styles.container}> 
	<DataTable.Header style={styles.tableHeader}> 
		<DataTable.Title style={styles.Title} >No</DataTable.Title> 
		<DataTable.Title>Nama</DataTable.Title> 
	</DataTable.Header> 
	<DataTable.Row> 
		<DataTable.Cell>1</DataTable.Cell> 
		<DataTable.Cell>Pak Prabowo</DataTable.Cell> 
	</DataTable.Row> 

	<DataTable.Row> 
		<DataTable.Cell>2</DataTable.Cell> 
		<DataTable.Cell>Pak Ganjar</DataTable.Cell> 
	</DataTable.Row> 
	<DataTable.Row> 
		<DataTable.Cell>3</DataTable.Cell> 
		<DataTable.Cell>Pak Anies</DataTable.Cell> 
	</DataTable.Row> 
	<DataTable.Row> 
		<DataTable.Cell>4</DataTable.Cell> 
		<DataTable.Cell>Pak Jokowi</DataTable.Cell> 
	</DataTable.Row> 
    <DataTable.Row> 
		<DataTable.Cell>5</DataTable.Cell> 
		<DataTable.Cell>Pak Mahfud</DataTable.Cell> 
	</DataTable.Row> 
    <DataTable.Row> 
		<DataTable.Cell>6</DataTable.Cell> 
		<DataTable.Cell>Pak Imin</DataTable.Cell> 
	</DataTable.Row> 
    <DataTable.Row> 
		<DataTable.Cell>7</DataTable.Cell> 
		<DataTable.Cell>Pak Gibran</DataTable.Cell> 
	</DataTable.Row> 
	</DataTable> 
); 
}; 

export default Table; 

const styles = StyleSheet.create({ 
container: { 
	padding: 15, 
}, 
tableHeader: { 
	backgroundColor: Colors.wet,
    borderRadius:5,
}, 
Title:{
    
},
});
