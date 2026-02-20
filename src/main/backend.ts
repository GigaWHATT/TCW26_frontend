import * as os from 'os';

const opsys: string = os.type();
const archsys: string = os.arch();

console.log(opsys,archsys)

function getBackendFileName() : string {
    if (opsys === 'Windows_NT' && archsys === 'x64') return 'TCW26_backend-0.0.0-windows-x86_64.exe';
    if (opsys === 'Darwin' && archsys === 'x64') return 'TCW26_backend-0.0.0-macos-x86_64';
    if (opsys === 'Darwin' && archsys === 'arm64') return 'TCW26_backend-0.0.0-macos-aarch64';
    if (opsys === 'Linux' && archsys === 'x64') return 'TCW26_backend-0.0.0-linux-x86_64';
    if (opsys === 'Linux' && archsys === 'arm64') return 'TCW26_backend-0.0.0-linux-aarch64';
    throw new Error(`Unsupported OS/arch combination: ${opsys} ${archsys}`);
}

console.log(getBackendFileName())

