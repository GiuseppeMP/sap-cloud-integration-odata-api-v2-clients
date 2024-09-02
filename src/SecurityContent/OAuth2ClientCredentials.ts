/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import {
  SecurityArtifactDescriptor,
  SecurityArtifactDescriptorField
} from './SecurityArtifactDescriptor';
import type { OAuth2ClientCredentialsApi } from './OAuth2ClientCredentialsApi';

/**
 * This class represents the entity "OAuth2ClientCredentials" of service "com.sap.hci.api".
 */
export class OAuth2ClientCredentials<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OAuth2ClientCredentialsType<T>
{
  /**
   * Technical entity name for OAuth2ClientCredentials.
   */
  static override _entityName = 'OAuth2ClientCredentials';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OAuth2ClientCredentials entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Token Service Url.
   */
  declare tokenServiceUrl: DeserializedType<T, 'Edm.String'>;
  /**
   * Client Id.
   */
  declare clientId: DeserializedType<T, 'Edm.String'>;
  /**
   * Client Secret.
   * @nullable
   */
  declare clientSecret?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Client Authentication.
   * @nullable
   */
  declare clientAuthentication?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scope.
   * @nullable
   */
  declare scope?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scope Content Type.
   * @nullable
   */
  declare scopeContentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Security Artifact Descriptor.
   */
  declare securityArtifactDescriptor: SecurityArtifactDescriptor<T>;

  constructor(_entityApi: OAuth2ClientCredentialsApi<T>) {
    super(_entityApi);
  }
}

export interface OAuth2ClientCredentialsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  tokenServiceUrl: DeserializedType<T, 'Edm.String'>;
  clientId: DeserializedType<T, 'Edm.String'>;
  clientSecret?: DeserializedType<T, 'Edm.String'> | null;
  clientAuthentication?: DeserializedType<T, 'Edm.String'> | null;
  scope?: DeserializedType<T, 'Edm.String'> | null;
  scopeContentType?: DeserializedType<T, 'Edm.String'> | null;
  securityArtifactDescriptor: SecurityArtifactDescriptor<T>;
}
