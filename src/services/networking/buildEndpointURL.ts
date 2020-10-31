export function buildEndpointURL(
    baseURL: string | undefined,
    endpoint: string,
    params?: string,
): string {
    return baseURL + 'api/' + endpoint + (params || '');
}
