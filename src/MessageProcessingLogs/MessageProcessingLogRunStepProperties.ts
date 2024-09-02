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
import type { MessageProcessingLogRunStepPropertiesApi } from './MessageProcessingLogRunStepPropertiesApi';

/**
 * This class represents the entity "MessageProcessingLogRunStepProperties" of service "com.sap.hci.api".
 */
export class MessageProcessingLogRunStepProperties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MessageProcessingLogRunStepPropertiesType<T>
{
  /**
   * Technical entity name for MessageProcessingLogRunStepProperties.
   */
  static override _entityName = 'MessageProcessingLogRunStepProperties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageProcessingLogRunStepProperties entity.
   */
  static _keys = ['RunId', 'ChildCount', 'Name'];
  /**
   * Run Id.
   */
  declare runId: DeserializedType<T, 'Edm.String'>;
  /**
   * Child Count.
   */
  declare childCount: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * @nullable
   */
  declare value?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MessageProcessingLogRunStepPropertiesApi<T>) {
    super(_entityApi);
  }
}

export interface MessageProcessingLogRunStepPropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  runId: DeserializedType<T, 'Edm.String'>;
  childCount: DeserializedType<T, 'Edm.Int32'>;
  name: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
}
