import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Container} from 'native-base';
// import io from 'socket.io-client';
import AppRoutes from './src/routes/AppRoutes';
// import {setSocket} from './src/redux/actions/socket';
// import {showLocalNotification} from './src/components/NotifHandler/NotifHandler';
// import PushNotification from 'react-native-push-notification';

const App = () => {
  // const channelId = 'transaction-observer';
  // const dispatch = useDispatch();
  // const {socket} = useSelector((state) => state.socket);
  // const {dataLogin} = useSelector((state) => state.authAPI);
  // useEffect(() => {
  //   if (socket !== null) return;
  //   else {
  //     const newSocket = io('http://192.168.43.220:8001', {
  //       query: {id: dataLogin.user_id},
  //     });
  //     dispatch(setSocket(newSocket));
  //   }
  // }, []);

  // // subscribe to socket event
  // useEffect(() => {
  //   if (socket == null) {
  //     const newSocket = io('http://192.168.43.220:8001', {
  //       query: {id: dataLogin.user_id},
  //     });
  //     dispatch(setSocket(newSocket));
  //   } else {
  //     socket.on('transaction', ({title, message}) => {
  //       PushNotification.createChannel(
  //         {
  //           channelId,
  //           channelName: 'transaction-notification',
  //         },
  //         (created) => console.log(`createChannel returned '${created}'`),
  //       );
  //       showLocalNotification(title, message, channelId);
  //     });
  //   }

  //   // return () => {
  //   //   socket.off('transaction');
  //   // };
  // }, [socket]);

  // React.useEffect(() => {
  //   const socket = io('http://192.168.43.220:8000');
  //   console.log(socket.connected); // false

  //   socket.on('connect', () => {
  //     console.log(socket.connected); // true
  //   });

  //   socket.on('disconnect', () => {
  //     console.log(socket.connected); // false
  //   });

  //   const newSocket = io('http://localhost:5000', {query: {id}});

  //   socket.on("check-transaction", ({transaction})=>{

  //   })
  //   socket.off("ckeck-transaction")
  //   // setSocket(newSocket);
  //   // console.log(newSocket);

  //   // return () => newSocket.close();

  //   // socket.on('refreshing-todo', ({todo}) => {
  //   //   //   console.log("refreshing todo", todo);
  //   //   const checkSameContent = todos.filter((todoClient) => {
  //   //     //fungsi untuk mengecek apakah ada content yang sama
  //   //     //jika ada konten yang sama, maka todo sudah ada => length > 0
  //   //     //jika tidak ada, maka todo belum ada => length == 0
  //   //     const title = todoClient.title === todo.title;
  //   //     const desc = todoClient.description === todo.description;
  //   //     return title && desc;
  //   //   });
  //   //   //   console.log(newTodo);
  //   //   if (checkSameContent.length === 0) {
  //   //     // console.log("added", newTodo);
  //   //     setTodos((prevTodo) => [...prevTodo, todo]);
  //   //   }
  //   // });

  //   // return () => socket.off('refreshing-todo');
  // }, [socket, todos, setTodos]);
  return (
    <Container>
      <AppRoutes />
    </Container>
  );
};

export default App;
