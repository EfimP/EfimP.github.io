let socket = new WebSocket("ws://localhost:8000");

socket.onopen = (event) =>{
    console.log("Socket open");
};

socket.onmessage = (event) => {
    //console.log(`Message recieved ${event.data}`);
    $("#MsgArea").append(event.data);
};

export function OnMouseClick (text) {
    socket.send(text);
    console.log("Message:", text);
}