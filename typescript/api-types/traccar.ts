type DeviceStatus = "online" | "offline" | "unknown";

interface TraccarDevice {
	id: number;
	name: string;
	uniqueId: string;
	status: DeviceStatus;
	lastUpdate: string;
}

interface TraccarPosition {
	id: number;
	deviceId: number;
	latitude: number;
	longitude: number;
	speed: number;
	fixTime: string;
	attributes: Record<string, unknown>;
}

function isOnline(device: TraccarDevice): boolean {
	return device.status === "online";
}

const myDevice: TraccarDevice = {
	id: 1,
	name: "My Device",
	uniqueId: "device123",
	status: "online",
	lastUpdate: "2026-01-01T12:00:00Z",
};

const checkStatus = isOnline(myDevice);
console.log(checkStatus);
