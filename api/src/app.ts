import { getOwners } from './components/owner/ownerService';
import { app } from './core/config';
import { globalConfig } from './core/globalConfig';


app.get('/v1/owners', (req: any, res: any) => {
	const owners = getOwners()
	res.status(200).send(owners);
});

app.listen(globalConfig.port, () => {
	console.log('IcgApp is listening on port 2700!');
});
