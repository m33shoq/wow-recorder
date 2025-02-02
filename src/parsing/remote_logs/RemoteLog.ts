// Language: TypeScript
import { io, Socket } from 'socket.io-client';
import ConfigService from '../../config/ConfigService';
import LogLine from '../LogLine';

let socket: Socket | null = null;
const serverURL = 'https://rak-gaming-annoucer-bot-93b48b086bae.herokuapp.com';


export async function fetchToken(username: string, password: string): Promise<string | undefined> {
  const loginUrl = `${serverURL}/login`;
  const response = await fetch(loginUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Server responded with status ${response.status}: ${errorText}`);
    return undefined;
  }

  const data = await response.json();
  if (data.token) {
    return data.token;
  }

  return undefined;
}

export function RemoteLog_Init(): void {
  socket = io(serverURL, { autoConnect: false });

  socket.on('connect', () => {
    console.info('[RemoteLog] Connected to server');
  });
  socket.on('connect_error', (error) => {
    console.error('[RemoteLog] Connection error:', error);
  });
  socket.on('connect_timeout', (timeout) => {
    console.error('[RemoteLog] Connection timeout:', timeout);
  });
  socket.on('disconnect', (reason) => {
    console.error('[RemoteLog] Disconnected:', reason);
  });
  RemoteLog_Connect();
}

export async function RemoteLog_Connect(): Promise<void> {
  if (socket) {
	const login: string = ConfigService.getInstance().get('RakGamingServerLogin');
    const password: string = ConfigService.getInstance().get('RakGamingServerPassword');

	console.info('[RemoteLog] Attempting to connect to server:', login, password);

	if (!login || !password) {
		return;
	}
	let token // = ConfigService.getInstance().get('RakGamingServerToken');
	if (!token) {
		token = await fetchToken(login, password);
		//ConfigService.getInstance().set('RakGamingServerToken', token);
	}

	if (token) {
		socket.auth = { token };
		socket.connect();
	} else {
		console.error('[RemoteLog] Failed to fetch token');
		return;
	}
  }
}

export async function RemoteLog_Reconnect(): Promise<void> {
	if (socket && socket.connected) {
	  	socket.disconnect();
	  	console.info('[RemoteLog] Disconnected for reconnection');
	}
	await RemoteLog_Connect();
}

export function RemoteLog_BroadcastLine(line: LogLine): void {
  if (socket && !line.broadcasted) {
    socket.emit('warcraft-recorder-remote-log-to-server', line.toString());
	// {
	// 	line: line.toString().substring(line.toString().indexOf('  ') + 2),
	// 	timestamp: line.date().getTime()
	// }
    console.info('[RemoteLog] Broadcasting log event:', line.toString());
  }
}

export function RemoteLog_OnLine(callback: (line: string) => void): void {
  if (socket) {
    socket.on('warcaraft-recorder-remote-log-to-client', callback);
  }
}