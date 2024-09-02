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
import type { RuntimeArtifactErrorInformationsApi } from './RuntimeArtifactErrorInformationsApi';

/**
 * This class represents the entity "RuntimeArtifactErrorInformations" of service "com.sap.hci.api".
 */
export class RuntimeArtifactErrorInformations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RuntimeArtifactErrorInformationsType<T>
{
  /**
   * Technical entity name for RuntimeArtifactErrorInformations.
   */
  static override _entityName = 'RuntimeArtifactErrorInformations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RuntimeArtifactErrorInformations entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RuntimeArtifactErrorInformationsApi<T>) {
    super(_entityApi);
  }
}

export interface RuntimeArtifactErrorInformationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
}
