export class RequestInterface {
  // TODO: CHange this to a variable of production and development
  private baseUrl = 'https://k8dcjarlg4.execute-api.eu-west-1.amazonaws.com/prod';
  // !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
  //   ? process.env.REACT_APP_BACKEND_URL_DEV
  //   : process.env.REACT_APP_BACKEND_URL;

  private databaseId = '';

  public constructor(baseUrl?: string, ) {
    this.baseUrl = baseUrl ?? this.baseUrl;
  }

  public fetchProjects = (): Promise<Response> => {
    const requestLink = this.baseUrl + '/privacy-schema/' + this.databaseId;
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'Application/json',
      },
    };
    return fetch(requestLink, requestOptions);
  };
}
