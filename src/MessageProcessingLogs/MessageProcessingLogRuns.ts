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
import type { MessageProcessingLogRunsApi } from './MessageProcessingLogRunsApi';
import {
  MessageProcessingLogRunSteps,
  MessageProcessingLogRunStepsType
} from './MessageProcessingLogRunSteps';

/**
 * This class represents the entity "MessageProcessingLogRuns" of service "com.sap.hci.api".
 */
export class MessageProcessingLogRuns<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MessageProcessingLogRunsType<T>
{
  /**
   * Technical entity name for MessageProcessingLogRuns.
   */
  static override _entityName = 'MessageProcessingLogRuns';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MessageProcessingLogRuns entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Run Start.
   * @nullable
   */
  declare runStart?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Run Stop.
   * @nullable
   */
  declare runStop?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Log Level.
   * @nullable
   */
  declare logLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overall State.
   * @nullable
   */
  declare overallState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Process Id.
   * @nullable
   */
  declare processId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link MessageProcessingLogRunSteps} entity.
   */
  declare runSteps: MessageProcessingLogRunSteps<T>[];

  constructor(_entityApi: MessageProcessingLogRunsApi<T>) {
    super(_entityApi);
  }
}

export interface MessageProcessingLogRunsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  runStart?: DeserializedType<T, 'Edm.DateTime'> | null;
  runStop?: DeserializedType<T, 'Edm.DateTime'> | null;
  logLevel?: DeserializedType<T, 'Edm.String'> | null;
  overallState?: DeserializedType<T, 'Edm.String'> | null;
  processId?: DeserializedType<T, 'Edm.String'> | null;
  runSteps: MessageProcessingLogRunStepsType<T>[];
}
