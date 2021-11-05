import { sendReport } from './components/report/reportService';
import { getOwners } from './components/owner/ownerService';
import { app } from './core/config';
import { globalConfig } from './core/globalConfig';

// owners
app.get('api/v1/owners', (req: any, res: any) => {
	const owners = getOwners()
	res.status(200).send(owners);
});
// reports
app.post('api/v1/report', (req: any, res: any) => {
	sendReport(req.body)
	res.status(200).send(true);
});

app.listen(globalConfig.port, () => {
	console.log(`IcgApp is listening on port ${globalConfig.port}!`);
});
