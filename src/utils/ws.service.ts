class WsService {
	baseUrl: string;
	token: string;
	ws?: WebSocket;
	constructor() {
		(this.baseUrl = ''), (this.token = '');
	}
	connect(baseUrl: string, token: string) {
		this.baseUrl = baseUrl;
		this.token = token;
		this.ws = new WebSocket(`${baseUrl}?token=${token}`);
	}
	onConnection(cb: (ws: WebSocket) => void) {
		if (this.ws) {
			this.ws.on;
		}
	}
}

export default WsService;
