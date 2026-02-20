import * as os from 'os';
import * as https from 'https';
import * as fs from 'fs';

const opsys: string = os.type();
const archsys: string = os.arch();

console.log(opsys,archsys);

function getBackendFileName() : string {
    if (opsys === 'Windows_NT' && archsys === 'x64') return 'TCW26_backend-0.0.0-windows-x86_64.exe';
    if (opsys === 'Darwin' && archsys === 'x64') return 'TCW26_backend-0.0.0-macos-x86_64';
    if (opsys === 'Darwin' && archsys === 'arm64') return 'TCW26_backend-0.0.0-macos-aarch64';
    if (opsys === 'Linux' && archsys === 'x64') return 'TCW26_backend-0.0.0-linux-x86_64';
    if (opsys === 'Linux' && archsys === 'arm64') return 'TCW26_backend-0.0.0-linux-aarch64';
    throw new Error(`Unsupported OS/arch combination: ${opsys} ${archsys}`);
}

console.log(getBackendFileName());

const fileName: string = getBackendFileName();

const url: string ='https://github.com/GigaWHATT/TCW26_backend/releases/download/v0.0.0/'+fileName;
const filePath: string ='../../backend_builds/'+fileName;
const file = fs.createWriteStream(filePath);

function downloadFile(): void{
    https.get(url, (response) => {
        response.pipe(file);

        file.on('finish',() => {
            file.close();
            console.log('Downloaded backend.');
        });
    });
}

downloadFile()
