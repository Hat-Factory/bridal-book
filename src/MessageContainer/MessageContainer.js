import React from 'react';
import { View, Text } from 'react-native';
import  MessageBubble  from '../MessageBubble/MessageBubble';

const MessageContainer = (props) => {
    return (
        <View style={{flexDirection: props.isUser ? 'row-reverse' : 'row'}}>
            <MessageBubble
                isShow={props.isShow}
                isUser={props.isUser}
                username={props.username}
                message={props.message}
                time={props.time}
            />
        </View>
    )
}

export { MessageContainer };