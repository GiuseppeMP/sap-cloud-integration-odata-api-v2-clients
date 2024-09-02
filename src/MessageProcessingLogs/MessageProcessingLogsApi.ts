/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageProcessingLogs } from './MessageProcessingLogs';
import { MessageProcessingLogsRequestBuilder } from './MessageProcessingLogsRequestBuilder';
import { MessageProcessingLogCustomHeaderPropertiesApi } from './MessageProcessingLogCustomHeaderPropertiesApi';
import { MessageStoreEntriesApi } from './MessageStoreEntriesApi';
import { MessageProcessingLogErrorInformationsApi } from './MessageProcessingLogErrorInformationsApi';
import { MessageProcessingLogAdapterAttributesApi } from './MessageProcessingLogAdapterAttributesApi';
import { MessageProcessingLogAttachmentsApi } from './MessageProcessingLogAttachmentsApi';
import { MessageProcessingLogRunsApi } from './MessageProcessingLogRunsApi';
import {
  IntegrationArtifact,
  IntegrationArtifactField
} from './IntegrationArtifact';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class MessageProcessingLogsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MessageProcessingLogs<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): MessageProcessingLogsApi<DeSerializersT> {
    return new MessageProcessingLogsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link customHeaderProperties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_HEADER_PROPERTIES: Link<
      MessageProcessingLogs<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogCustomHeaderPropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link messageStoreEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MESSAGE_STORE_ENTRIES: Link<
      MessageProcessingLogs<DeSerializersT>,
      DeSerializersT,
      MessageStoreEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link errorInformation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ERROR_INFORMATION: OneToOneLink<
      MessageProcessingLogs<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogErrorInformationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link adapterAttributes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADAPTER_ATTRIBUTES: Link<
      MessageProcessingLogs<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogAdapterAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link attachments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS: Link<
      MessageProcessingLogs<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link runs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RUNS: Link<
      MessageProcessingLogs<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogRunsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MessageProcessingLogCustomHeaderPropertiesApi<DeSerializersT>,
      MessageStoreEntriesApi<DeSerializersT>,
      MessageProcessingLogErrorInformationsApi<DeSerializersT>,
      MessageProcessingLogAdapterAttributesApi<DeSerializersT>,
      MessageProcessingLogAttachmentsApi<DeSerializersT>,
      MessageProcessingLogRunsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUSTOM_HEADER_PROPERTIES: new Link(
        'CustomHeaderProperties',
        this,
        linkedApis[0]
      ),
      MESSAGE_STORE_ENTRIES: new Link(
        'MessageStoreEntries',
        this,
        linkedApis[1]
      ),
      ERROR_INFORMATION: new OneToOneLink(
        'ErrorInformation',
        this,
        linkedApis[2]
      ),
      ADAPTER_ATTRIBUTES: new Link('AdapterAttributes', this, linkedApis[3]),
      ATTACHMENTS: new Link('Attachments', this, linkedApis[4]),
      RUNS: new Link('Runs', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = MessageProcessingLogs;

  requestBuilder(): MessageProcessingLogsRequestBuilder<DeSerializersT> {
    return new MessageProcessingLogsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MessageProcessingLogs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MessageProcessingLogs<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MessageProcessingLogs<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof MessageProcessingLogs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MessageProcessingLogs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    MESSAGE_GUID: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CORRELATION_ID: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLICATION_MESSAGE_ID: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLICATION_MESSAGE_TYPE: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOG_START: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LOG_END: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    SENDER: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVER: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTEGRATION_FLOW_NAME: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATE_WEB_LINK: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTEGRATION_ARTIFACT: IntegrationArtifactField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      false,
      true
    >;
    LOG_LEVEL: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_STATUS: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREVIOUS_COMPONENT_NAME: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCAL_COMPONENT_NAME: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGIN_COMPONENT_NAME: OrderableEdmTypeField<
      MessageProcessingLogs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customHeaderProperties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_HEADER_PROPERTIES: Link<
      MessageProcessingLogs<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogCustomHeaderPropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link messageStoreEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MESSAGE_STORE_ENTRIES: Link<
      MessageProcessingLogs<DeSerializersT>,
      DeSerializersT,
      MessageStoreEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link errorInformation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ERROR_INFORMATION: OneToOneLink<
      MessageProcessingLogs<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogErrorInformationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link adapterAttributes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADAPTER_ATTRIBUTES: Link<
      MessageProcessingLogs<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogAdapterAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link attachments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTACHMENTS: Link<
      MessageProcessingLogs<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogAttachmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link runs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RUNS: Link<
      MessageProcessingLogs<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogRunsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MessageProcessingLogs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link messageGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_GUID: fieldBuilder.buildEdmTypeField(
          'MessageGuid',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link correlationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRELATION_ID: fieldBuilder.buildEdmTypeField(
          'CorrelationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link applicationMessageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_MESSAGE_ID: fieldBuilder.buildEdmTypeField(
          'ApplicationMessageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link applicationMessageType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_MESSAGE_TYPE: fieldBuilder.buildEdmTypeField(
          'ApplicationMessageType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link logStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_START: fieldBuilder.buildEdmTypeField(
          'LogStart',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link logEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_END: fieldBuilder.buildEdmTypeField('LogEnd', 'Edm.DateTime', true),
        /**
         * Static representation of the {@link sender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENDER: fieldBuilder.buildEdmTypeField('Sender', 'Edm.String', true),
        /**
         * Static representation of the {@link receiver} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVER: fieldBuilder.buildEdmTypeField(
          'Receiver',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link integrationFlowName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGRATION_FLOW_NAME: fieldBuilder.buildEdmTypeField(
          'IntegrationFlowName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', true),
        /**
         * Static representation of the {@link alternateWebLink} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATE_WEB_LINK: fieldBuilder.buildEdmTypeField(
          'AlternateWebLink',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link integrationArtifact} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGRATION_ARTIFACT: fieldBuilder.buildComplexTypeField(
          'IntegrationArtifact',
          IntegrationArtifactField,
          false
        ),
        /**
         * Static representation of the {@link logLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_LEVEL: fieldBuilder.buildEdmTypeField(
          'LogLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_STATUS: fieldBuilder.buildEdmTypeField(
          'CustomStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'TransactionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link previousComponentName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_COMPONENT_NAME: fieldBuilder.buildEdmTypeField(
          'PreviousComponentName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link localComponentName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCAL_COMPONENT_NAME: fieldBuilder.buildEdmTypeField(
          'LocalComponentName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originComponentName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_COMPONENT_NAME: fieldBuilder.buildEdmTypeField(
          'OriginComponentName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MessageProcessingLogs)
      };
    }

    return this._schema;
  }
}
