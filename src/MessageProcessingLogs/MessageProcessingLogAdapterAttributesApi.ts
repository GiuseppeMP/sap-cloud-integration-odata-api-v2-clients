/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageProcessingLogAdapterAttributes } from './MessageProcessingLogAdapterAttributes';
import { MessageProcessingLogAdapterAttributesRequestBuilder } from './MessageProcessingLogAdapterAttributesRequestBuilder';
import { MessageProcessingLogsApi } from './MessageProcessingLogsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class MessageProcessingLogAdapterAttributesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MessageProcessingLogAdapterAttributes<DeSerializersT>,
      DeSerializersT
    >
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
  ): MessageProcessingLogAdapterAttributesApi<DeSerializersT> {
    return new MessageProcessingLogAdapterAttributesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link messageProcessingLog} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MESSAGE_PROCESSING_LOG: OneToOneLink<
      MessageProcessingLogAdapterAttributes<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [MessageProcessingLogsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      MESSAGE_PROCESSING_LOG: new OneToOneLink(
        'MessageProcessingLog',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = MessageProcessingLogAdapterAttributes;

  requestBuilder(): MessageProcessingLogAdapterAttributesRequestBuilder<DeSerializersT> {
    return new MessageProcessingLogAdapterAttributesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MessageProcessingLogAdapterAttributes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MessageProcessingLogAdapterAttributes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MessageProcessingLogAdapterAttributes<DeSerializersT>,
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
    typeof MessageProcessingLogAdapterAttributes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MessageProcessingLogAdapterAttributes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MessageProcessingLogAdapterAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADAPTER_ID: OrderableEdmTypeField<
      MessageProcessingLogAdapterAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADAPTER_MESSAGE_ID: OrderableEdmTypeField<
      MessageProcessingLogAdapterAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      MessageProcessingLogAdapterAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE: OrderableEdmTypeField<
      MessageProcessingLogAdapterAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link messageProcessingLog} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MESSAGE_PROCESSING_LOG: OneToOneLink<
      MessageProcessingLogAdapterAttributes<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MessageProcessingLogAdapterAttributes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.String', false),
        /**
         * Static representation of the {@link adapterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADAPTER_ID: fieldBuilder.buildEdmTypeField(
          'AdapterId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link adapterMessageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADAPTER_MESSAGE_ID: fieldBuilder.buildEdmTypeField(
          'AdapterMessageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MessageProcessingLogAdapterAttributes)
      };
    }

    return this._schema;
  }
}
