package mx.teksi.authtest.simpleapp.config;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.AbstractWebSocketHandler;



/**
 * WebSocketHandler
 */
@Component
public class WebSocketHandler extends AbstractWebSocketHandler {

    @Autowired
    SimpMessagingTemplate template;

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        System.out.println("New Text Message Received:" + message.getPayload());
        String peso = message.getPayload().replace("k","").replace("g","").replace("K","").replace("G","").replace("l","").replace("b","");
        // session.sendMessage(message);
        template.convertAndSend("/msg/topic/peso", new UserResponse(peso));

    }
}
