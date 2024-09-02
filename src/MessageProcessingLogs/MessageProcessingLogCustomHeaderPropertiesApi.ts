/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MessageProcessingLogCustomHeaderProperties } from './MessageProcessingLogCustomHeaderProperties';
import { MessageProcessingLogCustomHeaderPropertiesRequestBuilder } from './MessageProcessingLogCustomHeaderPropertiesRequestBuilder';
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
export class MessageProcessingLogCustomHeaderPropertiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MessageProcessingLogCustomHeaderProperties<DeSerializersT>,
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
  ): MessageProcessingLogCustomHeaderPropertiesApi<DeSerializersT> {
    return new MessageProcessingLogCustomHeaderPropertiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link log} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOG: OneToOneLink<
      MessageProcessingLogCustomHeaderProperties<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [MessageProcessingLogsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      LOG: new OneToOneLink('Log', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = MessageProcessingLogCustomHeaderProperties;

  requestBuilder(): MessageProcessingLogCustomHeaderPropertiesRequestBuilder<DeSerializersT> {
    return new MessageProcessingLogCustomHeaderPropertiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MessageProcessingLogCustomHeaderProperties<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MessageProcessingLogCustomHeaderProperties<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MessageProcessingLogCustomHeaderProperties<DeSerializersT>,
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
    typeof MessageProcessingLogCustomHeaderProperties,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MessageProcessingLogCustomHeaderProperties,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MessageProcessingLogCustomHeaderProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      MessageProcessingLogCustomHeaderProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE: OrderableEdmTypeField<
      MessageProcessingLogCustomHeaderProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link log} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOG: OneToOneLink<
      MessageProcessingLogCustomHeaderProperties<DeSerializersT>,
      DeSerializersT,
      MessageProcessingLogsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      MessageProcessingLogCustomHeaderProperties<DeSerializers>
    >;
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
        ALL_FIELDS: new AllFields(
          '*',
          MessageProcessingLogCustomHeaderProperties
        )
      };
    }

    return this._schema;
  }
}
