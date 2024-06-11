import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'; // Importa EvilIcons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Importa FontAwesome5

const ChatScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [messages, setMessages] = useState([
    { id: '1', sender: 'Andy Roms', message: 'Esme, Pasame la tarea ...', time: '10:00', active: true },
    // Agrega más mensajes según necesites
  ]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.ellipseContainer}>
        {/* Contenedor del elipse */}
        <View style={styles.ellipse}></View>

        {/* Texto "Mensajes" */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>Mensajes</Text>
        </View>

        {/* Icono de la campanita */}
        <View style={styles.bellIconContainer}>
          <View style={styles.circle}></View>
          <EvilIcons name="bell" size={25} color="black" style={styles.icon} />
        </View>

        {/* Icono de usuario */}
        <View style={styles.userIconContainer}>
          <View style={styles.circle}></View>
          <EvilIcons name="user" size={40} color="black" style={styles.icon} />
        </View>

        {/* Icono de usuarios */}
        <View style={styles.usersIconContainer}>
          <TouchableOpacity onPress={toggleModal}>
            <FontAwesome5 name="users" size={30} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.messageList}>
          <FlatList
            data={messages}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.messageItem}>
                <View style={styles.messageCircle}></View>
                <View style={styles.messageContent}>
                  <Text style={styles.messageSender}>{item.sender}</Text>
                  <Text style={styles.messageText}>{item.message}</Text>
                </View>
                <View style={styles.messageInfo}>
                  <Text>{item.time}</Text>
                  {item.active && <View style={styles.activeDot}></View>}
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>

        {/* Modal de lista de contactos */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Lista de contactos</Text>
              {/* Aquí puedes renderizar tu lista de contactos */}
              <FlatList
                data={[{ id: '1', name: 'Contacto 1', status: 'Activo' }, { id: '2', name: 'Contacto 2', status: 'Inactivo' }]}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.contactItem}>
                    <Text style={styles.contactName}>{item.name}</Text>
                    <Text style={styles.contactStatus}>{item.status}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
              <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  ellipseContainer: {
    position: 'absolute',
    width: 394,
    height: 153,
    left: 0,
    top: -34,
    alignItems: 'center',
  },
  bellIconContainer: {
    position: 'absolute',
    width: 25,
    height: 25,
    left: 53,
    top: 76,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userIconContainer: {
    position: 'absolute',
    width: 40,
    height: 40,
    left: 307,
    top: 63,
    alignItems: 'center',
    justifyContent: 'center',
  },
  usersIconContainer: {
    position: 'absolute',
    width: 62,
    height: 62,
    left: 299,
    top: 650,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9374B4',
    borderRadius: 62 / 2,
  },
  circle: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#FFFFFF',
  },
  icon: {
    zIndex: 1,
  },
  ellipse: {
    width: 393,
    height: 153,
    backgroundColor: '#9967CE',
    borderRadius: 45,
  },
  textContainer: {
    position: 'absolute',
    width: 105,
    height: 30,
    left: 144,
    top: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#9374B4',
    marginTop: 5,
  },
  text: {
    fontFamily: 'Hammersmith One',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 30,
    color: '#FFFFFF',
  },
  // Estilos para el modal y la lista de contactos
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactName: {
    fontSize: 16,
    marginBottom: 5,
  },
  contactStatus: {
    fontSize: 14,
    color: '#888',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#ccc',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  messageSender: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  messageText: {
    color: '#888',
  },
  messageInfo: {
    alignItems: 'flex-end',
  },
  messageCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#9374B4',
    marginRight: 15,
  },


});

export default ChatScreen;
