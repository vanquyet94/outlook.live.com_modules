// This file is auto-generated by the "tsproxygen.exe" tool. Manual modification is not recommended.
import type GetClientAccessTokenRequest from '../contract/GetClientAccessTokenRequest';

export default function getClientAccessTokenRequest(
    data: GetClientAccessTokenRequest
): GetClientAccessTokenRequest {
    let result: GetClientAccessTokenRequest = {
        __type: 'GetClientAccessTokenRequest:#Exchange',
        ...data,
    };

    return result;
}
