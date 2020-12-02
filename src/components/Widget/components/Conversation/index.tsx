import React from 'react';
import cn from 'classnames';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import QuickButtons from './components/QuickButtons';
import Interaction from './components/Interaction';

import { AnyFunction } from '../../../../utils/types';

import './style.scss';

type Props = {
  title: string;
  subtitle: string;
  senderPlaceHolder: string;
  showCloseButton: boolean;
  disabledInput: boolean;
  autofocus: boolean;
  className: string;
  sendMessage: AnyFunction;
  toggleChat: AnyFunction;
  profileAvatar?: string;
  titleAvatar?: string;
  onQuickButtonClicked?: AnyFunction;
  onTextInputChange?: (event: any) => void;
  sendButtonAlt: string;
  showTimeStamp: boolean;
  showSender: boolean;
  showInteraction:boolean;
  showMessages:boolean;
};

function Conversation({
  title,
  subtitle,
  senderPlaceHolder,
  showCloseButton,
  disabledInput,
  autofocus,
  className,
  sendMessage,
  toggleChat,
  profileAvatar,
  titleAvatar,
  onQuickButtonClicked,
  onTextInputChange,
  sendButtonAlt,
  showTimeStamp,
  showSender,
  showInteraction,
  showMessages
}: Props) {
  var sender = <></>
  if(showSender){
    sender = <Sender
    sendMessage={sendMessage}
    placeholder={senderPlaceHolder}
    disabledInput={disabledInput}
    autofocus={autofocus}
    onTextInputChange={onTextInputChange}
    buttonAlt={sendButtonAlt}
  />
  }
  var interaction = <></>
  if(showInteraction){
    interaction = <Interaction/>
  }
  var messages = <></>
  if(showMessages){
    messages = <Messages profileAvatar={profileAvatar} showTimeStamp={showTimeStamp} />
  }
  return (
    <div className={cn('rcw-conversation-container', className)} aria-live="polite">
      <Header
        title={title}
        subtitle={subtitle}
        toggleChat={toggleChat}
        showCloseButton={showCloseButton}
        titleAvatar={titleAvatar}
      />
      {messages}
      <QuickButtons onQuickButtonClicked={onQuickButtonClicked} />
      {sender}
      {interaction}
    </div>
  );
}

export default Conversation;
