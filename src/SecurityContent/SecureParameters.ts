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
import type { SecureParametersApi } from './SecureParametersApi';

/**
 * This class represents the entity "SecureParameters" of service "com.sap.hci.api".
 */
export class SecureParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SecureParametersType<T>
{
  /**
   * Technical entity name for SecureParameters.
   */
  static override _entityName = 'SecureParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SecureParameters entity.
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
   * Secure Param.
   * @nullable
   */
  declare secureParam?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Security Artifact Descriptor.
   */
  declare securityArtifactDescriptor: SecurityArtifactDescriptor<T>;

  constructor(_entityApi: SecureParametersApi<T>) {
    super(_entityApi);
  }
}

export interface SecureParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  secureParam?: DeserializedType<T, 'Edm.String'> | null;
  securityArtifactDescriptor: SecurityArtifactDescriptor<T>;
}
