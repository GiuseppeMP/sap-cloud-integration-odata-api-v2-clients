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
import type { IntegrationRuntimeArtifacts_1Api } from './IntegrationRuntimeArtifacts_1Api';
import {
  RuntimeArtifactErrorInformations,
  RuntimeArtifactErrorInformationsType
} from './RuntimeArtifactErrorInformations';

/**
 * This class represents the entity "IntegrationRuntimeArtifacts" of service "com.sap.hci.api".
 */
export class IntegrationRuntimeArtifacts_1<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IntegrationRuntimeArtifacts_1Type<T>
{
  /**
   * Technical entity name for IntegrationRuntimeArtifacts_1.
   */
  static override _entityName = 'IntegrationRuntimeArtifacts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntegrationRuntimeArtifacts_1 entity.
   */
  static _keys = ['Id'];
  /**
   * Id 1.
   */
  declare id_1: DeserializedType<T, 'Edm.String'>;
  /**
   * Version 1.
   * @nullable
   */
  declare version_1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name 1.
   * @nullable
   */
  declare name_1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type 1.
   * @nullable
   */
  declare type_1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deployed By 1.
   * @nullable
   */
  declare deployedBy_1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deployed On 1.
   * @nullable
   */
  declare deployedOn_1?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Status 1.
   * @nullable
   */
  declare status_1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link RuntimeArtifactErrorInformations} entity.
   */
  declare errorInformation_1?: RuntimeArtifactErrorInformations<T> | null;

  constructor(_entityApi: IntegrationRuntimeArtifacts_1Api<T>) {
    super(_entityApi);
  }
}

export interface IntegrationRuntimeArtifacts_1Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  id_1: DeserializedType<T, 'Edm.String'>;
  version_1?: DeserializedType<T, 'Edm.String'> | null;
  name_1?: DeserializedType<T, 'Edm.String'> | null;
  type_1?: DeserializedType<T, 'Edm.String'> | null;
  deployedBy_1?: DeserializedType<T, 'Edm.String'> | null;
  deployedOn_1?: DeserializedType<T, 'Edm.DateTime'> | null;
  status_1?: DeserializedType<T, 'Edm.String'> | null;
  errorInformation_1?: RuntimeArtifactErrorInformationsType<T> | null;
}
