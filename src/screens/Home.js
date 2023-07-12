import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import BaseScreen from '../components/BaseScreen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'react-native-axios';
import Input from '../components/Input';
import Button from '../components/Button';
const Home = ({navigation}) => {
  return (
    <BaseScreen
      header={true}
      onPress={() => navigation.openDrawer()}
      leftButton={'menu'}
      renderChild={Content({navigation})}
    />
  );
};

const Content = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [gstnumber, setGstNumber] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [branchname, setBranchName] = useState('');
  const [branchaddress, setBranchAddress] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [gstmodal, setGStModal] = useState(false);
  const [users, setusers] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = users.slice(startIndex, endIndex);

  const handlePagination = () => {
    if (currentPage == totalPages) {
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBackwardPagination = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleGoToLastPage = () => {
    setCurrentPage(totalPages);
  };
  const handleGoToFirstPage = () => {
    setCurrentPage(1);
  };

  const InputWidth = Dimensions.get('window').width / 1.2;

  const OpenGstModal = async () => {
    await setModalVisible(false);
    setGStModal(true);
  };

  const getUsers = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      setusers(response?.data?.users);
      setTotalPages(Math.ceil(response?.data?.users?.length / itemsPerPage));
    } catch (error) {
      console.log(error, 'error');
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const RenderUsers = ({item}) => {
    return (
      <>
        <View
          style={{
            backgroundColor: '#fff',
            marginVertical: 10,
            alignSelf: 'center',
            width: '95%',
            padding: 10,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 17,
              fontWeight: '500',
            }}>
            {item?.firstName} {item?.lastName}
          </Text>
          <Text
            style={{
              color: '#00000090',
              fontSize: 14,
              fontWeight: '500',
              marginVertical: 6,
            }}>
            {item?.email}
          </Text>
        </View>
      </>
    );
  };
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeading}>Add Customers details</Text>
            <Text style={styles.subHeading}>
              You can add as much customers you want !
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#00000040',
                width: Dimensions.get('window').width / 1.2,
                marginVertical: 10,
              }}
            />
            <Input
              width={InputWidth}
              placeholder="Enter PAN number"
              value={number}
              name="number"
              onChangeText={text => setNumber(text)}
            />
            <Input
              width={InputWidth}
              placeholder="First Name "
              value={firstname}
              name="firstname"
              onChangeText={text => setFirstName(text)}
            />
            <Input
              width={InputWidth}
              placeholder="Last Name "
              value={lastname}
              name="lastname"
              onChangeText={text => setLastName(text)}
            />
            <Input
              width={InputWidth}
              placeholder="Email"
              value={email}
              name="email"
              onChangeText={text => setEmail(text)}
            />
            <Input
              width={InputWidth}
              placeholder="Phone Number"
              value={mobile}
              keyboardType="number-pad"
              name="mobile"
              onChangeText={text => setMobile(text)}
            />
            <Input
              width={InputWidth}
              placeholder="Branch Number"
              value={branchname}
              name="branchname"
              onChangeText={text => setBranchName(text)}
            />
            <Input
              width={InputWidth}
              placeholder="Branch Address"
              value={branchaddress}
              name="branchaddress"
              onChangeText={text => setBranchAddress(text)}
            />
            <View
              style={{
                width: '50%',
                alignSelf: 'flex-start',
                flexDirection: 'row',
              }}>
              <Button
                width={'50%'}
                height={40}
                backgroundColor={'#fff'}
                title={'Cancel'}
                color={'#000'}
                onPress={() => setModalVisible(false)}
              />

              <Button
                width={'50%'}
                height={40}
                title={'Add'}
                onPress={() => OpenGstModal()}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={gstmodal}
        onRequestClose={() => {
          alert('Modal has been closed.');
          setGStModal(!gstmodal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeading}>Add Customers details</Text>
            <Text style={styles.subHeading}>
              You can add as much customers you want !
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#00000040',
                width: Dimensions.get('window').width / 1.2,
                marginVertical: 10,
              }}
            />
            <Input
              width={InputWidth}
              placeholder="GST Number"
              value={gstnumber}
              name="gstnumber"
              onChangeText={text => setGstNumber(text)}
            />
            <View
              style={{
                width: '50%',
                alignSelf: 'flex-start',
                flexDirection: 'row',
              }}>
              <Button
                width={'50%'}
                height={40}
                backgroundColor={'#fff'}
                title={'Cancel'}
                color={'#000'}
                onPress={() => setModalVisible(false)}
              />

              <Button
                width={'50%'}
                height={40}
                title={'Add'}
                onPress={() => setGStModal(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: '#00000030',
          }}>
          <View
            style={{
              flexDirection: 'row',
              //   alignItems: 'center',
              justifyContent: 'space-around',
              width: '20%',
            }}>
            <EvilIcons name="search" size={30} color={'#000'} />
            <Feather name="bell" size={24} color={'#000'} />
          </View>
          <View style={{}}>
            <Feather
              name="user"
              size={26}
              color={'#fff'}
              style={{
                padding: 5,
                backgroundColor: '#3B85CB',
                borderRadius: 30,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginVertical: 10,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 17,
              fontWeight: '500',
            }}>
            Customer List
          </Text>
          <Button
            onPress={() => setModalVisible(true)}
            title="Add Customer"
            width={'50%'}
          />
        </View>
        <Text
          style={{
            color: '#000',
            fontSize: 15,
            fontWeight: '500',
          }}>
          Customer Name
        </Text>
        <FlatList
          data={displayedData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={RenderUsers}
          onEndReached={handlePagination}
          onEndReachedThreshold={0.1}
        />
        {users && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // backgroundColor: '#000',
              width: '100%',
              padding: 10,
            }}>
            <TouchableOpacity onPress={() => handleGoToFirstPage()}>
              <Text style={styles.PaginationText}>&lt; &lt;</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleBackwardPagination()}>
              <Text style={styles.PaginationText}>&lt;</Text>
            </TouchableOpacity>
            <Text style={styles.currentValue}>{currentPage}</Text>
            <TouchableOpacity onPress={() => handlePagination()}>
              <Text style={styles.PaginationText}>&gt;</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGoToLastPage()}>
              <Text style={styles.PaginationText}>&gt; &gt;</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5F9',
    alignSelf: 'center',
    marginTop: 30,
    width: '100%',
    borderRadius: 10,
    padding: 10,
    // height: Dimensions.get('window').height,
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 6,
    width: '90%',
  },
  modalHeading: {
    fontSize: 24,
    color: '#000',
    fontWeight: '500',
    alignSelf: 'center',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 14,
    color: '#00000090',
    fontWeight: '400',
    alignSelf: 'center',
    textAlign: 'center',
  },
  PaginationText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '400',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 5,
    // backgroundColor: '#000'
  },
  currentValue: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
