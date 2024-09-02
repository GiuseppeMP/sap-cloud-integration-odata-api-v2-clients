/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KeyPairResources } from './KeyPairResources';
import { KeyPairResourcesRequestBuilder } from './KeyPairResourcesRequestBuilder';
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
  EdmTypeField,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class KeyPairResourcesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<KeyPairResources<DeSerializersT>, DeSerializersT>
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
  ): KeyPairResourcesApi<DeSerializersT> {
    return new KeyPairResourcesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = KeyPairResources;

  requestBuilder(): KeyPairResourcesRequestBuilder<DeSerializersT> {
    return new KeyPairResourcesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    KeyPairResources<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<KeyPairResources<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<KeyPairResources<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof KeyPairResources, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        KeyPairResources,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RESOURCE: EdmTypeField<
      KeyPairResources<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    PASSWORD: OrderableEdmTypeField<
      KeyPairResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<KeyPairResources<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link resource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE: fieldBuilder.buildEdmTypeField(
          'Resource',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link password} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSWORD: fieldBuilder.buildEdmTypeField(
          'Password',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', KeyPairResources)
      };
    }

    return this._schema;
  }
}
