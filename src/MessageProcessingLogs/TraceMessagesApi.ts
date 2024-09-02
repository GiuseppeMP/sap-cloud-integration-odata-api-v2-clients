/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TraceMessages } from './TraceMessages';
import { TraceMessagesRequestBuilder } from './TraceMessagesRequestBuilder';
import { TraceMessagePropertiesApi } from './TraceMessagePropertiesApi';
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
  Link
} from '@sap-cloud-sdk/odata-v2';
export class TraceMessagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TraceMessages<DeSerializersT>, DeSerializersT>
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
  ): TraceMessagesApi<DeSerializersT> {
    return new TraceMessagesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link properties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROPERTIES: Link<
      TraceMessages<DeSerializersT>,
      DeSerializersT,
      TraceMessagePropertiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [TraceMessagePropertiesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PROPERTIES: new Link('Properties', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = TraceMessages;

  requestBuilder(): TraceMessagesRequestBuilder<DeSerializersT> {
    return new TraceMessagesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TraceMessages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TraceMessages<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TraceMessages<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TraceMessages, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TraceMessages, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TRACE_ID: OrderableEdmTypeField<
      TraceMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MPL_ID: OrderableEdmTypeField<
      TraceMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL_STEP_ID: OrderableEdmTypeField<
      TraceMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYLOAD_SIZE: OrderableEdmTypeField<
      TraceMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    MIME_TYPE: OrderableEdmTypeField<
      TraceMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link properties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROPERTIES: Link<
      TraceMessages<DeSerializersT>,
      DeSerializersT,
      TraceMessagePropertiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TraceMessages<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link traceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACE_ID: fieldBuilder.buildEdmTypeField('TraceId', 'Edm.Int64', false),
        /**
         * Static representation of the {@link mplId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MPL_ID: fieldBuilder.buildEdmTypeField('MplId', 'Edm.String', false),
        /**
         * Static representation of the {@link modelStepId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_STEP_ID: fieldBuilder.buildEdmTypeField(
          'ModelStepId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payloadSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYLOAD_SIZE: fieldBuilder.buildEdmTypeField(
          'PayloadSize',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link mimeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIME_TYPE: fieldBuilder.buildEdmTypeField(
          'MimeType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TraceMessages)
      };
    }

    return this._schema;
  }
}
