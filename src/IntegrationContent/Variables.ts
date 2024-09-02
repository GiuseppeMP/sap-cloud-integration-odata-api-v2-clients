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
import type { VariablesApi } from './VariablesApi';

/**
 * This class represents the entity "Variables" of service "com.sap.hci.api".
 */
export class Variables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VariablesType<T>
{
  /**
   * Technical entity name for Variables.
   */
  static override _entityName = 'Variables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Variables entity.
   */
  static _keys = ['VariableName', 'IntegrationFlow'];
  /**
   * Variable Name.
   */
  declare variableName: DeserializedType<T, 'Edm.String'>;
  /**
   * Integration Flow.
   */
  declare integrationFlow: DeserializedType<T, 'Edm.String'>;
  /**
   * Visibility.
   * @nullable
   */
  declare visibility?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Updated At.
   * @nullable
   */
  declare updatedAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Retain Until.
   * @nullable
   */
  declare retainUntil?: DeserializedType<T, 'Edm.DateTime'> | null;

  constructor(_entityApi: VariablesApi<T>) {
    super(_entityApi);
  }
}

export interface VariablesType<T extends DeSerializers = DefaultDeSerializers> {
  variableName: DeserializedType<T, 'Edm.String'>;
  integrationFlow: DeserializedType<T, 'Edm.String'>;
  visibility?: DeserializedType<T, 'Edm.String'> | null;
  updatedAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  retainUntil?: DeserializedType<T, 'Edm.DateTime'> | null;
}
