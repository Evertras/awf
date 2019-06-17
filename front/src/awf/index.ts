import { awfdata } from '../proto/messages';
import { wasmImpl } from '../rpc/impl';

const wasmService = awfdata.WasmService.create(wasmImpl, false, false);

export default wasmService;
