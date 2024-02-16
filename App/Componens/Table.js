import React from 'react'; 
import { StyleSheet } from 'react-native'; 
import { DataTable } from 'react-native-paper'; 
import Colors from '../Shared/Colors';

const Table = () => { 
return ( 
	<DataTable style={styles.container}> 
	<DataTable.Header style={styles.tableHeader}> 
		<DataTable.Title style={styles.Title} >Hari</DataTable.Title> 
		<DataTable.Title>Nama</DataTable.Title> 
		<DataTable.Title></DataTable.Title> 
	</DataTable.Header> 
	<DataTable.Row style={styles.row}> 
		<DataTable.Cell>Senin</DataTable.Cell> 
		<DataTable.Cell>Pak Prabowo</DataTable.Cell> 
		<DataTable.Cell>Pak Prabowo</DataTable.Cell> 
	</DataTable.Row> 
	<DataTable.Row style={styles.row}> 
		<DataTable.Cell></DataTable.Cell> 
		<DataTable.Cell>Pak Ganjar</DataTable.Cell> 
		<DataTable.Cell>Pak Ganjar</DataTable.Cell> 
	</DataTable.Row> 
	<DataTable.Row style={styles.row}> 
		<DataTable.Cell></DataTable.Cell> 
		<DataTable.Cell>Pak Ganjar</DataTable.Cell> 
		<DataTable.Cell>Pak Ganjar</DataTable.Cell> 
	</DataTable.Row> 
	<DataTable.Row style={styles.row}> 
		<DataTable.Cell></DataTable.Cell> 
		<DataTable.Cell>Pak Ganjar</DataTable.Cell> 
		<DataTable.Cell></DataTable.Cell> 
	</DataTable.Row> 
	<DataTable.Row style={styles.row}> 
		<DataTable.Cell>Selasa</DataTable.Cell> 
		<DataTable.Cell>Pak Anies</DataTable.Cell> 
		<DataTable.Cell>Pak Anies</DataTable.Cell> 
	</DataTable.Row> 
	<DataTable.Row style={styles.row}> 
		<DataTable.Cell></DataTable.Cell> 
		<DataTable.Cell>Pak Jokowi</DataTable.Cell> 
		<DataTable.Cell>Pak Jokowi</DataTable.Cell> 
	</DataTable.Row> 
    <DataTable.Row style={styles.row}> 
		<DataTable.Cell>Rabu</DataTable.Cell> 
		<DataTable.Cell>Pak Mahfud</DataTable.Cell> 
		<DataTable.Cell>Pak Mahfud</DataTable.Cell> 
	</DataTable.Row> 
    <DataTable.Row style={styles.row}> 
		<DataTable.Cell></DataTable.Cell> 
		<DataTable.Cell>Pak Imin</DataTable.Cell>
		<DataTable.Cell>Pak Imin</DataTable.Cell> 
	</DataTable.Row> 
    <DataTable.Row style={styles.row}> 
		<DataTable.Cell>Kamis</DataTable.Cell> 
		<DataTable.Cell>Pak Gibran</DataTable.Cell> 
		<DataTable.Cell>Pak Gibran</DataTable.Cell> 
	</DataTable.Row> 
	<DataTable.Row style={styles.row}>  
		<DataTable.Cell></DataTable.Cell> 
		<DataTable.Cell>Pak Ganjar</DataTable.Cell> 
		<DataTable.Cell>Pak Ganjar</DataTable.Cell> 
	</DataTable.Row> 
	<DataTable.Row style={styles.row}> 
		<DataTable.Cell>Jumat</DataTable.Cell> 
		<DataTable.Cell>Pak Gibran</DataTable.Cell> 
		<DataTable.Cell>Pak Gibran</DataTable.Cell> 
	</DataTable.Row> 
	<DataTable.Row style={styles.row}> 
		<DataTable.Cell></DataTable.Cell> 
		<DataTable.Cell>Pak Ganjar</DataTable.Cell> 
		<DataTable.Cell>Pak Ganjar</DataTable.Cell> 
	</DataTable.Row> 
	<DataTable.Row style={styles.row}> 
		<DataTable.Cell>Sabtu</DataTable.Cell> 
		<DataTable.Cell>Pak Gibran</DataTable.Cell> 
		<DataTable.Cell>Pak Gibran</DataTable.Cell> 
	</DataTable.Row> 
	<DataTable.Row style={styles.row}> 
		<DataTable.Cell></DataTable.Cell> 
		<DataTable.Cell>Pak Ganjar</DataTable.Cell> 
		<DataTable.Cell>Pak Ganjar</DataTable.Cell> 
	</DataTable.Row> 
	<DataTable.Row style={styles.row}> 
		<DataTable.Cell>Minggu</DataTable.Cell> 
		<DataTable.Cell>Pak Gibran</DataTable.Cell> 
		<DataTable.Cell>Pak Gibran</DataTable.Cell> 
	</DataTable.Row> 
	<DataTable.Row style={styles.row}> 
		<DataTable.Cell></DataTable.Cell> 
		<DataTable.Cell>Pak Ganjar</DataTable.Cell> 
		<DataTable.Cell>Pak Ganjar</DataTable.Cell> 
	</DataTable.Row> 

	</DataTable> 
); 
}; 

export default Table; 

const styles = StyleSheet.create({ 
container: { 
	padding: 10, 
}, 
tableHeader: { 
	backgroundColor: Colors.wet,
    borderRadius:5,
}, 
Title:{
    
},
row :{
	marginBottom:5,
},
});
