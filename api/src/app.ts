import express from 'express';

const app = express();

app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
	res.send('Well done!');
});

app.listen(2700, () => {
	console.log('IcgApp is listening on port 2700!');
});
